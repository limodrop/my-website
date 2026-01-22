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
  ChevronLeft,
  Plus,
  Minus,
  Edit,
  Trash2,
  Download,
  Upload,
  Filter,
  SortAsc,
  Grid,
  Map,
  Wine,
  DollarSign,
  MessageCircle,
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
  grid: Grid,
  map: Map,

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
  phone: Phone,
  messageCircle: MessageCircle,

  // Time & Scheduling
  time: Clock,
  date: Calendar,
  clock: Clock,

  // People & Business
  user: User,
  users: Users,
  business: Briefcase,
  briefcase: Briefcase,

  // UI Actions
  arrow: ArrowRight,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  chevronLeft: ChevronLeft,
  plus: Plus,
  minus: Minus,
  edit: Edit,
  delete: Trash2,
  download: Download,
  upload: Upload,

  // Status & Feedback
  success: CheckCircle,
  checkCircle: CheckCircle,
  warning: AlertCircle,
  info: Info,
  star: Star,
  heart: Heart,
  award: Award,
  wine: Wine,
  dollarSign: DollarSign,

  // Admin & Settings
  settings: Settings,
  analytics: BarChart3,
  document: FileText,
  security: Shield,
  shield: Shield,
};

// Type for icon components
export type IconType = typeof Icons[keyof typeof Icons];
