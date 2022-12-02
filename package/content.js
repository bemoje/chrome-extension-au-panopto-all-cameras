const url = window.location.href;
const reg = /https:\/\/panopto\.au\.dk\/Panopto\/Pages\/Viewer.aspx\?/g;
if (reg.test(url)) {
   window.location.replace(url.replace('Viewer.aspx?', 'Embed.aspx?'));
}
