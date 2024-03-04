import { get, post } from './request'

/**
 * @desc 热门movies
 * @param page
 * @param  pageSize
 * @returns 
 */
export const ajaxRecentMoviesApi = (data: object) => get('/api/movie/recentMovies', data)

/**
 * @desc 热门分类
 * @param page
 * @param  pageSize
 * @returns 
 */
export const ajaxRecentTvsApi = (data: object) => get('/api/movie/recentTvs', data)

/**
 * @desc 详细信息查询
 * @param itemId  根据itemid 返回电影或者tv的系列信息
 * @returns 
 */
export const ajaxEpisodesApi = (data: object) => get('/api/movie/episodes', data)

/**
 * @desc - 播放地址详细查询
 * @param episodeId  根据 episodeid 返回播放地址列表
 * @returns 
 */
export const ajaxPlayersApi = (data: object) => get('/api/movie/players', data)

/**
 * @desc -电影和系列分类查询
 * @param type  类型 movie｜ tv
 * @param tag  标签 movie:【peliculas】 , tv【en-emision,finalizado,dia,semana,mes,estreno】
 * @param genres 分类
 * @desc  参数说明：type/tag/genres 当前参数唯一
 * @returns 
 */
export const ajaxMovieItemsApi = (data: object) => get('/api/movie/items', data)

/**
 * @desc -电影和系列分页查询
 * @param pageSize  总共返回多少条 默认24条
 * @param type  参数为movie｜ tv  分别返回电影和系列信息  
 * @param startId  起始记录数，考虑性能，分页不返回总记录。 只进行一页一页查询，当总的记录数不足定义的条数，则表示到了最后一页
 * @returns 
 */
export const ajaxPageQueryApi = (data: object) => get('/api/movie/pageQuery', data)

/**
 * @desc -按关键字搜索查询
 * @param Keyword  关键词搜索
 * @returns 
 */
export const ajaxSearchApi = (data: object) => get('/api/movie/search', data)