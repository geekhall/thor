import { defineStore } from 'pinia'

interface ObjectList {
  [key: string]: string[]
}

export const usePermissionStore = defineStore('permission', {
  state: () => {
    const keys = localStorage.getItem('ms_keys');
    return {
      key: keys ? JSON.parse(keys) : <string[]>[],
      defaultList: <ObjectList>{
        admin: [
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
          'dashboard', 'table', 'form', 'editor', 'markdown', 'upload', 'permission', 'icon', 'svg', 'tailwind', 'uno', 'svg',
        ],
        user: ['1', '2', '3', '11', '13', '14', '15', '16', '17', '18', '19', '20']
      }
    };
  },
  actions: {
    handleSet(val: string[]) {
      this.key = val;
    }
  }
});
