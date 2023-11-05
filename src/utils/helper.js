export function searchFilter(searchInput, restaurants){
    const searchFilter = restaurants.filter((restaurant)=>restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase()));
    return searchFilter;
};