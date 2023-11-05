type ItemType = {
	id: string
	title: string
	description: string
};

export interface ICartItems {
	items: ItemType[]
}

export const getCartItems = async (): Promise<ICartItems> => {
	await new Promise((resolve) => setTimeout(resolve, 700));

	return {
		items: [
			{
				id: crypto.randomUUID(),
				title: 'Молоко',
				description: 'Белая жидкость от коровы'
			},
			{
				id: crypto.randomUUID(),
				title: 'Мёд',
				description: 'Желтая жидкость от пчел'
			}
		]
	};
};