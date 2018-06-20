import store from '../store'

export default async function (ctx){
  try {
    let cookies = parseCookies(ctx.req)
    let user =  await store().dispatch('checkAuthentication', cookies['USER_TOKEN'])
  } catch (e) {
    console.trace(e)
    return Promise.reject(e)
  }
}

function parseCookies (request) {
  const list = {},
    rc = request.headers.cookie;
  rc && rc.split(';').forEach(function( cookie ) {
    let parts = cookie.split('=');
    list[parts.shift().trim()] = decodeURI(parts.join('='));
  });
  return list;
}
