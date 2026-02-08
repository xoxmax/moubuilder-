
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Sparkles, Image as ImageIcon, Film, Edit3, ArrowLeft, Loader2, Download, Maximize } from 'lucide-react';
import { ViewState } from '../types';

interface AIStudioProps {
  onNavigate: (view: ViewState, slug?: string) => void;
}

const AIStudio: React.FC<AIStudioProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'generate' | 'video' | 'edit'>('generate');
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [imageSize, setImageSize] = useState('1K');
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [resultVideo, setResultVideo] = useState<string | null>(null);
  const [sourceImage, setSourceImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setSourceImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const generateImage = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    setResultImage(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: { parts: [{ text: prompt }] },
        config: {
          imageConfig: { aspectRatio: aspectRatio as any, imageSize: imageSize as any }
        },
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          setResultImage(`data:image/png;base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (error) {
      console.error(error);
      alert("Failed to generate image. Please ensure your API key is configured correctly.");
    } finally {
      setIsGenerating(false);
    }
  };

  const generateVideo = async () => {
    if (!prompt && !sourceImage) return;
    setIsGenerating(true);
    setResultVideo(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      let op = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt,
        image: sourceImage ? {
          imageBytes: sourceImage.split(',')[1],
          mimeType: sourceImage.split(';')[0].split(':')[1]
        } : undefined,
        config: { numberOfVideos: 1, resolution: '720p', aspectRatio: '16:9' }
      });

      while (!op.done) {
        await new Promise(r => setTimeout(r, 5000));
        op = await ai.operations.getVideosOperation({ operation: op });
      }

      const link = op.response?.generatedVideos?.[0]?.video?.uri;
      const res = await fetch(`${link}&key=${process.env.API_KEY}`);
      const blob = await res.blob();
      setResultVideo(URL.createObjectURL(blob));
    } catch (error) {
      console.error(error);
      alert("Video generation failed.");
    } finally {
      setIsGenerating(false);
    }
  };

  const editImage = async () => {
    if (!sourceImage || !prompt) return;
    setIsGenerating(true);
    setResultImage(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { inlineData: { data: sourceImage.split(',')[1], mimeType: sourceImage.split(';')[0].split(':')[1] } },
            { text: prompt }
          ]
        },
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          setResultImage(`data:image/png;base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (error) {
      console.error(error);
      alert("Image edit failed.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-slate-500 hover:text-navy mb-8 font-medium transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Site
        </button>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="bg-navy p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-green-400" size={32} />
              <h1 className="text-3xl font-bold uppercase tracking-widest">Mou AI Studio</h1>
            </div>
            <p className="text-slate-300">Visualize your dream space with Mou Builders' next-gen Gemini AI architectural tools.</p>
          </div>

          <div className="flex border-b border-slate-100">
            {[
              { id: 'generate', label: 'Image Gen', icon: ImageIcon },
              { id: 'video', label: 'Veo Video', icon: Film },
              { id: 'edit', label: 'Smart Edit', icon: Edit3 },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 flex items-center justify-center gap-2 py-4 font-bold transition-all ${
                  activeTab === tab.id ? 'text-navy border-b-2 border-navy' : 'text-slate-400 hover:text-navy'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-8 grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-navy mb-2 uppercase tracking-widest">Visual Prompt</label>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={
                    activeTab === 'generate' ? "E.g. A futuristic luxury apartment by Mou Builders in Dhaka, modern glass facade, sunset lighting" :
                    activeTab === 'video' ? "E.g. Drone flight through a modern housing complex courtyard" :
                    "E.g. Add a modern balcony to this building"
                  }
                  className="w-full h-32 p-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-navy/10 outline-none resize-none text-slate-700"
                />
              </div>

              {activeTab === 'generate' && (
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2 uppercase tracking-widest">Aspect Ratio</label>
                    <select 
                      value={aspectRatio}
                      onChange={(e) => setAspectRatio(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200"
                    >
                      {['1:1', '3:2', '16:9', '9:16', '21:9'].map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2 uppercase tracking-widest">Resolution</label>
                    <select 
                       value={imageSize}
                       onChange={(e) => setImageSize(e.target.value)}
                       className="w-full p-3 rounded-xl border border-slate-200"
                    >
                      {['1K', '2K', '4K'].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
              )}

              {(activeTab === 'edit' || activeTab === 'video') && (
                <div>
                  <label className="block text-sm font-bold text-navy mb-2 uppercase tracking-widest">Upload Asset</label>
                  <div className="flex items-center gap-4">
                    <input type="file" onChange={handleFileChange} className="hidden" id="ai-file" accept="image/*" />
                    <label htmlFor="ai-file" className="cursor-pointer bg-slate-100 hover:bg-slate-200 px-6 py-3 rounded-xl font-bold text-navy transition-all border border-dashed border-slate-300">
                      {sourceImage ? 'Replace Image' : 'Select Photo'}
                    </label>
                    {sourceImage && <img src={sourceImage} className="w-16 h-16 object-cover rounded-lg" />}
                  </div>
                </div>
              )}

              <button 
                onClick={activeTab === 'generate' ? generateImage : activeTab === 'video' ? generateVideo : editImage}
                disabled={isGenerating || (!prompt && !sourceImage)}
                className="w-full py-4 bg-navy text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-slate-800 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
              >
                {isGenerating ? <Loader2 className="animate-spin" /> : <Sparkles />}
                {isGenerating ? 'Mou AI is generating...' : `Start ${activeTab.toUpperCase()}`}
              </button>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center min-h-[400px] relative overflow-hidden">
              {!resultImage && !resultVideo && !isGenerating && (
                <div className="text-center text-slate-400 p-8">
                  <Maximize size={48} className="mx-auto mb-4 opacity-20" />
                  <p className="font-medium">Your design preview will appear here</p>
                </div>
              )}
              {isGenerating && (
                 <div className="text-center">
                    <Loader2 size={48} className="animate-spin mx-auto mb-4 text-navy" />
                    <p className="text-navy font-bold">Mou AI is processing your request...</p>
                 </div>
              )}
              {resultImage && <img src={resultImage} className="w-full h-full object-contain" />}
              {resultVideo && <video src={resultVideo} controls autoPlay className="w-full h-full object-contain" />}
              
              {(resultImage || resultVideo) && !isGenerating && (
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <a 
                    href={resultImage || resultVideo || ''} 
                    download="mou-builders-ai-gen"
                    className="p-3 bg-white text-navy rounded-full shadow-lg hover:scale-110 transition-all border border-slate-100"
                  >
                    <Download size={20} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIStudio;
