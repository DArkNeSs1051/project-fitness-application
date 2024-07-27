import './global.css';

import 'react-native-gesture-handler';

import RootStack from './navigation';
import { GluestackUIProvider } from 'components/ui/gluestack-ui-provider';

export default function App() {
  return <GluestackUIProvider mode="light"><RootStack /></GluestackUIProvider>;
}
