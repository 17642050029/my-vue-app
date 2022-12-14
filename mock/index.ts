import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';


const modules = import.meta.glob('./**/*.ts',{ eager: true });

const mockModules: any[] = [];
Object.keys(modules).forEach((key) => {
  mockModules.push(modules[key]);
});


/**
 * 在生产环境中使用。 需要手动导入所有模块
 */
export function setupProdMockServer() {
  createProdMockServer(mockModules);
}