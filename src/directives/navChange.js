export default{
  // 掛載完畢後執行的方法
  mounted(el, bindings, vnode) {
    const { tabClass, activeClass, currentIndex } = bindings.value;
    
    el.tabClass = tabClass;
    el.activeClass = activeClass;
    el.oTabItems = el.getElementsByClassName(tabClass);

    el.oTabItems[currentIndex].className = `${ tabClass } ${ activeClass }`;
  },
  // 資料發生改變時觸發
  updated(el, bindings) {
    const { currentIndex } = bindings.value,
          oldIndex = bindings.oldValue.currentIndex,
          { tabClass, activeClass, oTabItems } = el;

    oTabItems[oldIndex].className = tabClass;
    oTabItems[currentIndex].className = `${tabClass} ${activeClass}`;      
  },
}