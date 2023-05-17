import { NavigationProvider } from '@/ctx/NavigationProvider';

export default function withNavigationProvider<Props extends {}>(
  Component: React.FC<Props>
) {
  return function WrappedComponent(props: Props) {
    return (
      <NavigationProvider>
        <Component {...props} />
      </NavigationProvider>
    );
  };
}
