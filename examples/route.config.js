import navConfig from "./nav.config.json";
// import langs from './i18n/route';

const LOAD_DOCS_MAP = {
	'zh-CN': path => {
    return r => require.ensure([], () => r(require(`./docs/zh-CN${path}.md`)), 'zh-CN');
	},
	'en-US': path => {
    return r => require.ensure([], () => r(require(`./docs/en-US${path}.md`)), 'en-US');
  }
};

const loadDocs = function(lang, path) {
  return LOAD_DOCS_MAP[lang](path);
};

const LOAD_MAP = {
  'zh-CN': name => {
    return r => require.ensure([], () =>
      r(require(`./pages/zh-CN/${name}.vue`)),
    'zh-CN');
  },
  'en-US': name => {
    return r => require.ensure([], () =>
      r(require(`./pages/en-US/${name}.vue`)),
    'en-US');
  }
};

// const load = function(path) {
//   return r => require.ensure([], () =>
//     r(require(`./pages${path}.vue`))
//     );
// };

const load = function(lang, path) {
  return LOAD_MAP[lang](path);
};

// const loadDocs = function(path) {
//   return r => require.ensure([], () =>
//     r(require(`./docs${path}.md`))
//     );
// };

const registerRoutes = function(){
	let route = []
	Object.keys(navConfig).forEach((lang, index) => {
		// lang: zh-CN en-US
		// index: 0 1
		// 当前语言模块下面所有的内容
		let navs = navConfig[lang]
		route.push({
      path: `/${ lang }/component`,
      redirect: `/${ lang }/component/button`,
      component: load(lang, 'component'),
      children: []
		});

		navs.forEach(nav => {
      if (nav.href) return;
      if (nav.groups) {
        nav.groups.forEach(group => {
          group.list.forEach(nav => {
            addRoute(nav, lang, index);
          });
        });
      }
    });
	})

	function addRoute(page, lang, index) {
    const component = page.path === '/changelog'
      ? load(lang, 'changelog')
      : loadDocs(lang, page.path);
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
        lang
      },
      name: 'component-' + lang + (page.title || page.name),
      component: component.default || component
    };

    route[index].children.push(child);
  }
	return route;
}



// let route = registerRoute(navConfig);

// langs.forEach(lang => {
//   route = route.concat(generateMiscRoutes(lang.lang));
// });


const routes = registerRoutes();


export default routes;