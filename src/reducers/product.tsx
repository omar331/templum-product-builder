import * as productHelper from '../helper/productHelper.jsx';
import {searchPageKeyPath} from '../helper/productHelper.jsx';

const productReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'REPLACE_STATE':
            return action.newState;
        case 'UPDATE_EDITING_PAGES':
            return productHelper.updateEditingPages(state, action.editingPages );
        case 'PRODUCT_CHANGE_TITLE':
            return productHelper.changeProductTitle(state, action.newTitle);
        case 'PAGE_CHANGE_TITLE':
            return productHelper.changePageInfo(state, action.localId, {title: action.newTitle} );
        case 'NEW_PAGE':
            // creates the page
            const newPageNode = productHelper.createPageNode({title: undefined, localId: action.localId });

            return productHelper.insertPage(
                              state,
                              action.ownerPageLocalId,
                              action.position,
                              newPageNode
                            );
        case 'MOVE_PAGE':
            return productHelper.movePage(state, action.sourcePageLocalId, action.destinationPageLocalId, action.position);
        case 'CHANGE_PAGE_TREE_STATE':
            return productHelper.changePageTreeState(state, action.pageLocalId, action.newStateInfo);
        case 'QUICK_LEVEL_MOVE':
            return productHelper.quickLevelMove(state, action.direction, action.pageLocalId);
        case 'CHANGE_PAGE_INFO':
            return productHelper.changePageInfo(state, action.localPageId, action.pageInfo );
        case 'DELETE_PAGE':
            return productHelper.removePageByLocalId( state, action.pageLocalId );
        case 'CLONE_PAGE':
            return  productHelper.clonePageByLocalId( state, action.pageLocalId, action.position );
        case 'PAGE_ITEM_START_DRAG':
            return productHelper.setPageBeingDragged(state, action.pageInfo);
        case 'PAGE_ITEM_END_DRAG':
            return productHelper.unsetPageBeingDragged(state, action.pageInfo);
        case 'PAGE_JUST_CHANGED_SANITIZE':
            return productHelper.pageHasJustChangedSanitize( state );
        case 'ANY_CONTENT_HAS_CHANGED':
            return productHelper.anyContentHasChanged( state, action.value );
        case 'UPDATE_TREE_EXPAND_COLLAPSE_STATE':
            return productHelper.updateTree( state, action.newExpandedCollapsedState );
        default:
            return state;
    }
};

export default productReducer;
