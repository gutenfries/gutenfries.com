import { Private, Router, Route, Set } from '@redwoodjs/router';
import PostsLayout from 'src/layouts/PostsLayout';
import BlogLayout from 'src/layouts/BlogLayout';
import MainLayout from './layouts/MainLayout/MainLayout';

const Routes = () => {
	return (
		<Router>
			<Route path='/login' page={LoginPage} name='login' />
			<Route path='/signup' page={SignupPage} name='signup' />
			<Route path='/forgot-password' page={ForgotPasswordPage} name='forgotPassword' />
			<Route path='/reset-password' page={ResetPasswordPage} name='resetPassword' />
			<Set wrap={MainLayout}>
				<Route path='/main' page={MainPage} name='main' />
			</Set>
			<Set wrap={BlogLayout}>
				<Route path='/article/{id:Int}' page={ArticlePage} name='article' />
				<Route path='/contact' page={ContactPage} name='contact' />
				<Route path='/about' page={AboutPage} name='about' />
				<Route path='/' page={HomePage} name='home' />
			</Set>
			<Private unauthenticated='home'>
				<Set wrap={PostsLayout}>
					<Route path='/admin/posts/new' page={PostNewPostPage} name='newPost' />
					<Route path='/admin/posts/{id:Int}/edit' page={PostEditPostPage} name='editPost' />
					<Route path='/admin/posts/{id:Int}' page={PostPostPage} name='post' />
					<Route path='/admin/posts' page={PostPostsPage} name='posts' />
				</Set>
			</Private>

			<Route notfound page={NotFoundPage} />
		</Router>
	);
};

export default Routes;
