import { IGalleryItem } from '@/components/ui/gallery/Gallery.interface';
import { ISlide } from '@/components/ui/slider/slider.interface';

export interface HomePageProps {
  slides: ISlide[];
  trendingMovies: IGalleryItem[];
  actors: IGalleryItem[];
}
