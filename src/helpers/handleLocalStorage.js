// Seta as chaves pedidas no LS ao fazer Login
export function saveTokensAndEmail(email) {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
  localStorage.setItem('user', JSON.stringify({ email }));
}

export function defaultFun() {

}