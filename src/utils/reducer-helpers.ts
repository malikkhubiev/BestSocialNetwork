export const arrayMaker = (users:any, objId:any, value:any) => {
    // @ts-ignore
    users.map(a => {
        if (a['id'] === objId) {
            return { ...a, followed: value };
        }
        return a;
    })
}