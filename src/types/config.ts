import type { AUTO_MODE, DARK_MODE, LIGHT_MODE } from '@constants/constants'

export interface SiteConfig {
  title: string
  subtitle: string

  lang: string

  themeColor: string
  banner: {
    enable: boolean
    text: string
    link: string
  }
  toc: {
    enable: boolean
    depth: number
  }
  navBar: NavBarConfig
  profile: ProfileConfig
  license: LicenseConfig

  favicon: Favicon[]
}

export type Favicon = {
  src: string
  theme?: 'light' | 'dark'
  sizes?: string
}

export enum LinkPreset {
  Home = 0,
  Archive = 1,
  About = 2,
}

export interface NavBarLink {
  name: string
  url: string
  external: boolean
}

export interface NavBarLogo {
  enable: boolean
  compact: boolean
  svg: boolean
  width: number
  height: number
  alt: string
}

export interface NavBarConfig {
  logo: NavBarLogo
  title: string
  links: NavBarLink[]
}

export interface ProfileLink {
  name: string
  url: string
  icon: string
  color: string
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string
  achievements: string[]
}

export interface Education {
  degree: string
  school: string
  location: string
  period: string
  specialization?: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
}

export interface Award {
  name: string
  issuer: string
  year: string
  description: string
}

export interface Leadership {
  role: string
  organization: string
  period: string
}

export interface ProfileConfig {
  avatar: string
  name: string
  bio: string
  location: string
  company: string
  contact?: {
    email: string
    phone: string
  }
  links: ProfileLink[]
  skills: SkillCategory[]
  experience: Experience[]
  education: Education[]
  certifications: Certification[]
  awards?: Award[]
  leadership?: Leadership[]
}

export interface LicenseConfig {
  enable: boolean
  name: string
  url: string
}

export type LIGHT_DARK_MODE =
  | typeof LIGHT_MODE
  | typeof DARK_MODE
  | typeof AUTO_MODE

export type BlogPostData = {
  body: string
  title: string
  published: Date
  description: string
  tags: string[]
  draft?: boolean
  image?: string
  category?: string
  prevTitle?: string
  prevSlug?: string
  nextTitle?: string
  nextSlug?: string
}
