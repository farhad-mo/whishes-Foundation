
export interface WishStory {
  id: string;
  childName: string;
  age: number;
  title: string;
  description: string;
  imageUrl: string;
  status: 'pending' | 'granted' | 'in_progress';
  category: 'to_go' | 'to_be' | 'to_have' | 'to_meet';
}

export interface SupportTier {
  id: string;
  title: string;
  amount: number;
  description: string;
  icon: string;
}
