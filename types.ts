
export interface Lesson {
  id: string;
  title: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  instructor: string;
  thumbnail: string;
  description: string;
}

export interface DigitalProduct {
  id: string;
  title: string;
  type: 'E-Book' | 'Video Pack' | 'Move Database';
  price: string;
  thumbnail: string;
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  icon: string;
  unlocked: boolean;
}
