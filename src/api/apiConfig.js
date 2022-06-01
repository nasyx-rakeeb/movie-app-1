const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '66399f1ca818e0781c37aa081b24c1f4',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
