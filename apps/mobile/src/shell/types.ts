/**
 * Root navigation type contract. The full navigator hierarchy (auth / tabs /
 * modals) is designed in Increment 2; Increment 1 declares a single shell route
 * so the navigation container is typed and renders.
 *
 * React Navigation param lists must be `type` aliases: the `ParamListBase`
 * constraint requires an implicit index signature, which `interface` does not
 * provide.
 */
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RootStackParamList = {
  Shell: undefined;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends RootStackParamList {}
  }
}
