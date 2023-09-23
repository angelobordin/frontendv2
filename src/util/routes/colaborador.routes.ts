const routeBase = "http://localhost:3000/";

export const ROUTE_USER_REGISTER = () => {
	return routeBase.concat("user/registrar");
};

export const ROUTE_PONTO_REGISTER = (name: string) => {
	return routeBase.concat(`${name.toString().replaceAll(" ", "-").toLowerCase()}/registrar`);
};

export const ROUTE_REGISTROS_LIST = () => {
	return routeBase.concat("registros");
};

export const ROUTE_REGISTRO_BY_NAME = (name: string) => {
	return routeBase.concat(name);
};

export const ROUTE_REGISTRO_UPDATE_BY_ID = (id: number) => {
	return routeBase.concat(`${id}`);
};
