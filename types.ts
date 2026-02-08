
import React from 'react';

export enum ProjectCategory {
  BASHUNDHARA = 'Bashundhara',
  DHAKA_OTHER = 'Dhaka (Other)',
  OUTSIDE_DHAKA = 'Outside Dhaka'
}

export enum ProjectStatus {
  COMPLETED = 'Completed',
  ONGOING = 'Ongoing',
  UPCOMING = 'Upcoming'
}

export interface ProjectTimeline {
  start: string;
  milestones: { date: string; event: string; image?: string }[];
  completion: string;
}

export interface ProjectMaterial {
  name: string;
  brand: string;
  image: string;
  icon: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  block?: string;
  category: ProjectCategory;
  status: ProjectStatus;
  type: 'Residential' | 'Commercial' | 'Mixed-use';
  clientModel: 'Own' | 'Joint Venture' | 'Turnkey';
  floors: number;
  units: number;
  unitSize: string;
  parking: string;
  lifts: number;
  landArea: string;
  image: string; // Cover image
  overviewImage: string;
  description: string;
  exteriorImages: string[]; // 6 images
  structuralImages: string[]; // 6 images
  interiorImages: string[]; // 6 images
  materials: ProjectMaterial[]; // 6 items with images
  timeline: ProjectTimeline;
  locationImages: string[];
  viewCount: number;
  floorPlanUrl: string;
  beforeImg: string;
  afterImg: string;
  /* Compatibility fields */
  gallery?: string[];
  features?: string[];
  constructionImages?: string[];
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: 'Project Update' | 'Announcement' | 'Construction' | 'Milestone';
  image: string;
  gallery: string[];
  relatedProjectId?: string;
  viewCount: number;
}

export interface Agent {
  id: string;
  name: string;
  photo: string;
  specialization: string;
  phone: string;
  email: string;
  bio: string;
  isBashundharaExpert: boolean;
  portfolio: string[]; // New: Gallery images for agent detail
}

export type ViewState = 'home' | 'project-book' | 'project-detail' | 'news-list' | 'news-detail' | 'ai-studio';
