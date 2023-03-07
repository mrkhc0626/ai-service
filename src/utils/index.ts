export * from './api';
export * from './bcrypt';
export * from './formatDate';
export * from './generator';
export * from './validation';

export const timeout = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};