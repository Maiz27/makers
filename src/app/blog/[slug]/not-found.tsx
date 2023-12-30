import Blog404 from '@/components/404s/Blog404';
import PageTransition from '@/components/animationWrappers/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <Blog404 />
    </PageTransition>
  );
}
