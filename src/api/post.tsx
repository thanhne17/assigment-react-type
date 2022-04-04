import instance from "./instance";
import { postType } from "../type/posts"

export const getAll = () => {
    const url = "/posts";
    return instance.get(url)
}

export const getOne = (id: number) => {
    const url = `/posts/${id}`
    return instance.get(url)
}

export const remove = (id: number) => {
    const url = `/posts/${id}`;
    return instance.delete(url)
}

export const edit = (id: number, data: postType) => {
    const url = `posts/${id}`;
    return instance.put(url ,data)
}

export const add = (data: postType) => {
    const url = "/posts";
    return instance.post(url, data)
}