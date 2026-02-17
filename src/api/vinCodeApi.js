import axios from "../../node_modules/axios/index"

const api = axios.create({
    baseURL: "https://vpic.nhtsa.dot.gov/api/"

})

export const getVinCode = async (vin) => {
    const vinCode = vin.toUpperCase()
    const res = await api.get(`/vehicles/DecodeVin/${vinCode}`, {
        params: {format: "json"}
    })
    return res.data
}

export const getVehicleVariablesList = async () => {
    const res = await api.get(`/vehicles/getvehiclevariablelist`, {
        params: {format: "json"}
    })
    return res.data
}
