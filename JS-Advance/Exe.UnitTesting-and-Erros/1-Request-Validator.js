function validate(obj) {
  let method = ["GET", "POST", "DELETE", "CONNECT"];
  let version = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  let uriRegex = /\w+/m;
  let massageText = /[<>\&'")]+/gm;

  if (!obj.method || !method.includes(obj.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }
  if (!obj.uri || obj.uri === "" || uriRegex.test(obj.url)) {
    throw new Error("Invalid request header: Invalid URI");
  }
  if (!obj.version || !version.includes(obj.version)) {
    throw new Error("Invalid request header: Invalid Version");
  }
  if (obj.message === undefined || massageText.test(obj.message)) {
    throw new Error("Invalid request header: Invalid Message");
  }
  return obj;
}
