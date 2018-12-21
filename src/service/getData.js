import Http from './http';

export const login = (params) => new Http().require({api: '/',param:params})