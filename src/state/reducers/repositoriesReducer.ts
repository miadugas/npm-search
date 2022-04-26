interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface Action {
  type: string;
  payload?: any;
}

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    default:
    case 'search_respositories':
      return { loading: true, error: null, data: [] };
    case 'search_respositories_success':
      return { loading: false, error: null, data: action.payload };
    case 'search_respositories_error':
      return { loading: false, error: action.payload, data: [] };
      return state;
  }
};

export default reducer;
