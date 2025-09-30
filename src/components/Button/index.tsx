import {
  TouchableOpacity,
  TouchableHighlightProps,
  Text,
  ActivityIndicator,
} from 'react-native';
import { colors } from '@/theme';

import { styles } from './styles';

type Props = TouchableHighlightProps & {
  title: string;
  isProcessing?: boolean;
};

export function Button({ title, isProcessing = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
      activeOpacity={0.8}
      disabled={isProcessing}
    >
      <Text style={styles.title}>
        {isProcessing ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          title
        )}
      </Text>
    </TouchableOpacity>
  );
}
