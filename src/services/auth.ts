export default function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'sdbfiubdsfii982bef92eu9ns2d928bfdebqf324fwdgf2ee3hf3',
        user: {
          name: 'Luc',
          email: 'lucbonnet10@gmail.com',
        },
      });
    }, 1500);
  });
}
