const ap = new APlayer({
  container: document.getElementById('aplayer'), //播放器容器元素
  mini: false, //迷你模式
  autoplay: true, //自动播放
  theme: '#FADFA3', //主题色
  loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
  order: 'random', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
  preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
  volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
  mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
  listFolded: false, //列表默认折叠
  listMaxHeight: 90, //列表最大高度
  lrcType: 3, //歌词传递方式
//   // audio: [ //音频信息,包含以下
//   //   {
//   //     name: '安和桥', //音频名称
//   //     artist: '宋冬野', //音频艺术家
//   //     url: 'https://www.ytmp3.cn/down/33115.mp3', //音频外链
//   //     cover: 'cover1.jpg', //音频封面
//   //     lrc: 'lrc1.lrc', //音频歌词，配合上面的lrcType使用
//   //     theme: '#ebd0c2' //切换到此音频时的主题色，比上面的 theme 优先级高
//   //   },
//   //   {
//   //     name: 'name2', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
//   //     artist: 'artist2',
//   //     url: 'url2.mp3',
//   //     cover: 'cover2.jpg',
//   //     lrc: 'lrc2.lrc',
//   //     theme: '#46718b'
//   //   }
//   // ]
//
  audio: [
    {
      name: "嗜好",
      artist: '颜人中',
      url: 'http://m10.music.126.net/20210730003511/0177d8e5da6de10a97ea6064378e5035/ymusic/0252/0153/5659/58b03e7a0269420a3633a383ac928f4b.mp3',
    },
    {
      name: '太阳',
      artist: '王巨星',
      url: 'http://m10.music.126.net/20210730003656/0d17f733dbbbdc9ba1f6d9f7bf5441e5/ymusic/565b/5109/515d/a1578ba9c2fcf6596433f71223e81037.mp3',
    },
    {
      name: '好喜欢你',
      artist: '颜人中',
      url: 'http://m10.music.126.net/20210730003841/4be7d48522cc231438a8c182ee6fcc6e/ymusic/530f/020b/065d/de2f5327585a27151005178a6137fd3a.mp3',
    },
    {
      name: '失眠飞行',
      artist: '接个吻，开一枪,沈以诚,薛黛霏',
      url: 'http://m10.music.126.net/20210730004130/f97023f23076c16c4b5983ace8b68fd2/ymusic/075e/0f52/045c/0431c434b788a0a8a90f3658c6c0fd5f.mp3',
    },
    {
      name: '晴天',
      artist: '周杰伦',
      url: 'https://www.joy127.com/url/84270.mp3',
    },
    {
      name: '狂妄',
      artist: 'Todd Li',
      url: 'http://m10.music.126.net/20210730004356/991ece340c5a4e325cceab9a7b6338e2/ymusic/c01c/a5ab/69f3/7ee3349d395dfd2bef9f4428f206508f.mp3',
    },
    {
      name: '鹦鹉',
      artist: '孟凡明',
      url: 'http://m10.music.126.net/20210730124112/e9047bd4bb8800bd7a667b93e7e7b067/ymusic/c0d1/b85b/b094/ed3dad3d800f73940553e877458b33a4.mp3',
    },
    {
      name: '浪子回頭',
      artist: '茄子蛋',
      url: 'http://m10.music.126.net/20210730124428/175ed0c508c8166f7bfa4046a621c77a/ymusic/0a18/e88d/979f/6d5282fba78b1674f3103ab87342846a.mp3',
    },
  ]
});
