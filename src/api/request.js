import ajax from '@/ajax.js'
const suppliersList = function (params) {
    return ajax.post('/zhigeng/list', params)
}
export { suppliersList }
