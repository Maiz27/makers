import Default404 from '@/components/404s/Default404';
import PageTransition from '@/components/animationWrappers/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <Default404 />
    </PageTransition>
  );
}
