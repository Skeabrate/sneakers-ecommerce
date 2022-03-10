import { useSelector, useDispatch } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../Redux/addToFavoriteSlice';

export const useAddToWishlist = (id, title, price, image = []) => {
	const favorite = useSelector((state) => state.favorite);
	const dispatch = useDispatch();

	const handleFavorite = (e) => {
		e.preventDefault();
		let check = false;

		favorite.find((item) => {
			if (item.id === 0) dispatch(removeFromFavorite({ id: 0 }));
			if (item.id === id) check = true;
			return check;
		});

		if (check) dispatch(removeFromFavorite({ id: id }));
		else
			dispatch(
				addToFavorite({
					id: id,
					title: title,
					price: price,
					image: image,
					amount: 1,
				})
			);
	};

	const isItemFavorite = favorite.find((item) => item.id === id);

	return { isItemFavorite, handleFavorite };
};
