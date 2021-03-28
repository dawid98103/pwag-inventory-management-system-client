import { PageType, useStateContext } from '../contexts/state';
import MoviePage from './MoviePage';
import UsersPage from './UsersPage';

const ContentPage = (): JSX.Element => {
    const { state, dispatch } = useStateContext();

    const renderPage = (): JSX.Element => {
        switch (state.currentPage) {
            case PageType.MOVIES:
                return <MoviePage />
            case PageType.USERS:
                return <UsersPage />
        }
    }

    return (
        <>
            {renderPage()}
        </>
    )
}

export default ContentPage;