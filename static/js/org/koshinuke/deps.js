// This file was autogenerated by calcdeps.py
goog.addDependency("../../../js/org/koshinuke/base.js", ['org.koshinuke'], ['goog.array', 'goog.crypt', 'goog.crypt.Md5', 'goog.dom.classes', 'goog.pubsub.PubSub']);
goog.addDependency("../../../js/org/koshinuke/model/AbstractFacade.js", ['org.koshinuke.model.AbstractFacade'], ['goog.dom', 'goog.dom.forms', 'goog.net.XhrIo', 'goog.object', 'goog.Uri']);
goog.addDependency("../../../js/org/koshinuke/model/CommitsFacade.js", ['org.koshinuke.model.CommitsFacade'], ['goog.array', 'goog.net.XhrIo', 'goog.Uri', 'goog.string', 'org.koshinuke']);
goog.addDependency("../../../js/org/koshinuke/model/DiffFacade.js", ['org.koshinuke.model.DiffFacade'], ['goog.array', 'goog.net.XhrIo', 'goog.Uri', 'goog.string', 'org.koshinuke']);
goog.addDependency("../../../js/org/koshinuke/model/HistoriesFacade.js", ['org.koshinuke.model.HistoriesFacade'], ['goog.array', 'goog.net.XhrIo', 'goog.Uri', 'goog.string', 'org.koshinuke']);
goog.addDependency("../../../js/org/koshinuke/model/RepositoryFacade.js", ['org.koshinuke.model.RepositoryFacade'], ['org.koshinuke.model.AbstractFacade']);
goog.addDependency("../../../js/org/koshinuke/model/ResourceFacade.js", ['org.koshinuke.model.ResourceFacade'], ['goog.array', 'goog.net.XhrIo', 'goog.string', 'goog.Uri', 'org.koshinuke', 'org.koshinuke.model.AbstractFacade']);
goog.addDependency("../../../js/org/koshinuke/model/TreeGridFacade.js", ['org.koshinuke.model.TreeGridFacade'], ['goog.array', 'goog.i18n.DateTimeFormat', 'goog.string', 'goog.net.XhrIo', 'goog.Uri', 'org.koshinuke', 'org.koshinuke.model.AbstractFacade', 'org.koshinuke.ui.TreeGrid.Node', 'org.koshinuke.ui.TreeGrid.Leaf', 'org.koshinuke.ui.TreeGrid.Psuedo']);
goog.addDependency("../../../js/org/koshinuke/positioning/gravityposition.js", ['org.koshinuke.positioning.GravityPosition'], ['goog.positioning.AbstractPosition']);
goog.addDependency("../../../js/org/koshinuke/template/branchactivity.js", ['org.koshinuke.template.branchactivity'], ['soy', 'soy.StringBuilder']);
goog.addDependency("../../../js/org/koshinuke/template/breadcrumb.js", ['org.koshinuke.template.breadcrumb'], ['soy', 'soy.StringBuilder']);
goog.addDependency("../../../js/org/koshinuke/template/commits.js", ['org.koshinuke.template.commits'], ['soy', 'soy.StringBuilder']);
goog.addDependency("../../../js/org/koshinuke/template/diffviewer.js", ['org.koshinuke.template.diffviewer'], ['soy', 'soy.StringBuilder']);
goog.addDependency("../../../js/org/koshinuke/template/repository.js", ['org.koshinuke.template.repository'], ['soy', 'soy.StringBuilder']);
goog.addDependency("../../../js/org/koshinuke/template/resourceeditor.js", ['org.koshinuke.template.resourceeditor'], ['soy', 'soy.StringBuilder']);
goog.addDependency("../../../js/org/koshinuke/template/tooltip.js", ['org.koshinuke.template.tooltip'], ['soy', 'soy.StringBuilder']);
goog.addDependency("../../../js/org/koshinuke/template/treegrid.js", ['org.koshinuke.template.treegrid'], ['soy', 'soy.StringBuilder']);
goog.addDependency("../../../js/org/koshinuke/ui/Breadcrumb.js", ['org.koshinuke.ui.Breadcrumb'], ['goog.array', 'goog.dom', 'goog.soy', 'goog.ui.Component', 'org.koshinuke.template.breadcrumb']);
goog.addDependency("../../../js/org/koshinuke/ui/Clipboard.js", ['org.koshinuke.ui.Clipboard'], ['goog.array', 'goog.dom', 'goog.soy', 'goog.ui.Component', 'ZeroClipboard', 'org.koshinuke.positioning.GravityPosition', 'org.koshinuke.ui.Popup']);
goog.addDependency("../../../js/org/koshinuke/ui/Commits.js", ['org.koshinuke.ui.Commits'], ['goog.array', 'goog.dom', 'goog.dom.classes', 'goog.events', 'goog.ui.Button', 'goog.ui.Component', 'org.koshinuke.template.commits', 'org.koshinuke.positioning.GravityPosition', 'org.koshinuke.ui.Popup']);
goog.addDependency("../../../js/org/koshinuke/ui/DiffViewer.js", ['org.koshinuke.ui.DiffViewer'], ['goog.array', 'goog.dom', 'goog.dom.classes', 'goog.dom.ViewportSizeMonitor', 'goog.events', 'goog.soy', 'goog.ui.Button', 'goog.ui.Component', 'CodeMirror', 'CodeMirror.modes', 'org.koshinuke', 'org.koshinuke.template.diffviewer']);
goog.addDependency("../../../js/org/koshinuke/ui/Histories.js", ['org.koshinuke.ui.Histories'], ['goog.array', 'goog.dom', 'goog.dom.classes', 'goog.dom.ViewportSizeMonitor', 'goog.events', 'goog.soy', 'goog.ui.Component', 'goog.ui.IdGenerator', 'org.koshinuke.template.branchactivity']);
goog.addDependency("../../../js/org/koshinuke/ui/PaneTab.js", ['org.koshinuke.ui.PaneTab.Factory'], ['goog.array', 'goog.dom', 'goog.dom.classes', 'goog.events', 'goog.ui.Tab', 'org.koshinuke.model.TreeGridFacade', 'org.koshinuke.model.ResourceFacade', 'org.koshinuke.model.HistoriesFacade', 'org.koshinuke.model.CommitsFacade', 'org.koshinuke.model.DiffFacade', 'org.koshinuke.ui.Histories', 'org.koshinuke.ui.Commits', 'org.koshinuke.ui.DiffViewer', 'org.koshinuke.ui.TreeGrid', 'org.koshinuke.ui.ResourceEditor', 'org.koshinuke.ui.PaneTabRenderer']);
goog.addDependency("../../../js/org/koshinuke/ui/PaneTabBar.js", ['org.koshinuke.ui.PaneTabBar'], ['goog.array', 'goog.dom', 'goog.dom.classes', 'goog.dom.query', 'goog.ui.TabBar', 'org.koshinuke']);
goog.addDependency("../../../js/org/koshinuke/ui/PaneTabRenderer.js", ['org.koshinuke.ui.PaneTabRenderer'], ['goog.dom', 'goog.ui.TabRenderer']);
goog.addDependency("../../../js/org/koshinuke/ui/Popup.js", ['org.koshinuke.ui.Popup'], ['goog.array', 'goog.dom', 'goog.dom.query', 'goog.soy', 'goog.ui.Popup', 'org.koshinuke.template.tooltip']);
goog.addDependency("../../../js/org/koshinuke/ui/Repository.js", ['org.koshinuke.ui.Repository'], ['goog.array', 'goog.dom', 'goog.dom.classes', 'goog.dom.query', 'goog.events', 'goog.ui.Tab', 'org.koshinuke.ui.TreeGrid', 'org.koshinuke.ui.TreeGrid.Node', 'org.koshinuke.ui.PaneTab.Factory', 'org.koshinuke.ui.RepositoryRenderer']);
goog.addDependency("../../../js/org/koshinuke/ui/RepositoryRenderer.js", ['org.koshinuke.ui.RepositoryRenderer'], ['goog.dom.query', 'goog.dom.a11y.Role', 'goog.soy', 'goog.ui.Component.State', 'goog.ui.TabRenderer', 'org.koshinuke.template.repository']);
goog.addDependency("../../../js/org/koshinuke/ui/RepoUrls.js", ['org.koshinuke.ui.RepoUrls'], ['goog.array', 'goog.dom', 'goog.dom.classes', 'goog.dom.query', 'goog.string.format', 'goog.ui.Component', 'goog.ui.SelectionModel']);
goog.addDependency("../../../js/org/koshinuke/ui/ResourceEditor.js", ['org.koshinuke.ui.ResourceEditor'], ['goog.array', 'goog.dom', 'goog.dom.forms', 'goog.soy', 'goog.string', 'goog.style', 'goog.ui.Button', 'goog.ui.Component', 'soy', 'CodeMirror', 'CodeMirror.modes', 'org.koshinuke', 'org.koshinuke.template.resourceeditor', 'org.koshinuke.ui.Clipboard']);
goog.addDependency("../../../js/org/koshinuke/ui/TreeGrid.js", ['org.koshinuke.ui.TreeGrid', 'org.koshinuke.ui.TreeGrid.EventType'], ['goog.array', 'goog.dom', 'goog.dom.classes', 'goog.events.Event', 'goog.object', 'goog.soy', 'goog.style', 'goog.ui.Component', 'org.koshinuke', 'org.koshinuke.template.treegrid']);
goog.addDependency("../../../js/org/koshinuke/ui/TreeGridNode.js", ['org.koshinuke.ui.TreeGrid.Node', 'org.koshinuke.ui.TreeGrid.Node.State', 'org.koshinuke.ui.TreeGrid.Leaf', 'org.koshinuke.ui.TreeGrid.Psuedo'], ['goog.dom.classes', 'goog.dom.query', 'goog.ui.Component', 'org.koshinuke', 'org.koshinuke.template.treegrid']);
