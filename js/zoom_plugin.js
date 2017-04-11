!function(global) {

  global.addEventListener('toolbar:iconAdded', function iconAdded(evt) {
    if (evt.detail.id === 'zoom') {
      global.removeEventListener('toolbar:iconAdded', iconAdded);

      document.getElementById('zoom').addEventListener('click', function() {
        this.classList.toggle('in');
        Utils.sendToParent('toolbar:zoom-' + (this.classList.contains('in') ? 'in' : 'out'));
      });
    }
  });

  Utils.sendEvent('toolbar:addIcon', {
    id: 'zoom',
    element: 'icon fa fa-fw fa-search-plus'
  });

  console.log('(PLUGIN) Zoom plugin loaded');

}(this);
