import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

export default function footer() {
  return (
    <footer
      className="bg-gray-800 text-gray-100   fixed
    inset-x-0
    bottom-0
    p-4"
    >
      <div className="container mx-auto flex justify-center">
        <h3>Copyright: 2021</h3>
      </div>
    </footer>
  );
}
