import { useRecoilValue } from 'recoil';
import { htmlState } from '../recoil/atom';

export default function MyComponent() {
  const html = useRecoilValue(htmlState);
   console.log(html,"recoil se data aa raha hai html")
  return <div>{html}</div>;
}





