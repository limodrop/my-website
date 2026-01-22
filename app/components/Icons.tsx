import {
  Plane,
  Building2,
  Car,
  Globe,
  Landmark,
  Bus,
  Layers,
  Phone,
  Languages,
  Search,
  Menu,
  X,
  MapPin,
  Clock,
  Calendar,
  User,
  Briefcase,
  ArrowRight,
  Home,
  Mail,
  Settings,
  Users,
  BarChart3,
  FileText,
  Shield,
  Award,
  Star,
  Heart,
  CheckCircle,
  AlertCircle,
  Info,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  Edit,
  Trash2,
  Download,
  Upload,
  Filter,
  SortAsc,
} from "lucide-react";

/**
 * Global Icon Registry
 * 
 * Centralized icon system using Lucide React.
 * All icons are consistent, theme-aware, and semantic.
 * 
 * Usage:
 * ```tsx
 * import { Icons } from "@/app/components/Icons";
 * 
 * const Icon = Icons.airport;
 * <Icon className="w-5 h-5 text-[var(--text)]" />
 * ```
 */
export const Icons = {
  // Core Navigation
  home: Home,
  menu: Menu,
  close: X,
  search: Search,
  filter: Filter,
  sort: SortAsc,

  // Services & Transportation
  airport: Plane,
  hotel: Building2,
  car: Car,
  fleet: Bus,
  services: Layers,

  // Location
  globe: Globe,
  city: Landmark,
  location: MapPin,

  // Communication
  contact: Phone,
  mail: Mail,
  language: Languages,

  // Time & Scheduling
  time: Clock,
  date: Calendar,

  // People & Business
  user: User,
  users: Users,
  business: Briefcase,

  // UI Actions
  arrow: ArrowRight,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  plus: Plus,
  minus: Minus,
  edit: Edit,
  delete: Trash2,
  download: Download,
  upload: Upload,

  // Status & Feedback
  success: CheckCircle,
  warning: AlertCircle,
  info: Info,
  star: Star,
  heart: Heart,
  award: Award,

  // Admin & Settings
  settings: Settings,
  analytics: BarChart3,
  document: FileText,
  security: Shield,
};

// Type for icon components
export type IconType = typeof Icons[keyof typeof Icons];
