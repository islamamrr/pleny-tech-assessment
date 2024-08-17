export enum SortOption {
    TITLE = 'Title',
    PRICE = 'Price',
    DISCOUNT_PERCENTAGE = 'Discount Percentage',
    STOCK = 'Stock',
    RATING = 'Rating',
    POPULARITY = 'Popularity',
}

export const SortOptionSlug: Record<SortOption, string> = {
    [SortOption.TITLE]: 'title',
    [SortOption.PRICE]: 'price',
    [SortOption.DISCOUNT_PERCENTAGE]: 'discountPercentage',
    [SortOption.STOCK]: 'stock',
    [SortOption.RATING]: 'rating',
    [SortOption.POPULARITY]: 'popularity',
};