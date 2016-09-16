import * as React from 'react';

import * as classNames from 'classnames';

import { DropTarget } from 'react-dnd';

import { ItemTypes } from '../constants';


const dropStuffAreaTarget = {
    canDrop(props:any) {
        // TODO: check what type of object may be dropped here
        return true;
    },
    drop(props:any, monitor:any) {
        let item = monitor.getItem()

        switch (monitor.getItemType()) {
            case ItemTypes.NEW_PAGE:
                props.onDrop(ItemTypes.NEW_PAGE, 
                                {
                                    ownerPage: props.ownerPage,
                                    pageOrder: props.pageOrder,
                                    parentPage: props.parentPage
                                }
                            )
                break
            case ItemTypes.MOVE_PAGE:
                let destinationId:string = null

                destinationId = props.ownerPage.get('localId')

                props.onDrop(ItemTypes.MOVE_PAGE,
                                {
                                    sourceLocalId: item.localId,
                                    destinationPageLocalId: destinationId,
                                    position: props.pageOrder + 1
                                }
                            )
                break
        }
    }
};


const collect = (connect:any, monitor:any) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }
};




interface DropAreaProps {
    ownerPage?: any,
    parentPage?: any,
    previousPage?: any,
    pageOrder?: number,
    connectDropTarget: any,
    isOver: any,
    canDrop: any,
    onDrop: any,
    onNewPage?: any
}




/**
 * Area where users can place content stuff (pages, tasks and so on)
 */
class DropArea extends React.Component<DropAreaProps, {}> {
    constructor(props:any) {
        super(props);
    }
    render() {
        const { ownerPage, parentPage, pageOrder, 
            connectDropTarget, isOver, canDrop, onNewPage,
            previousPage        
        } = this.props;

        return connectDropTarget(
            <div className={classNames( {'insert-stuff-area': true, 'insert-stuff-area-over': isOver } )}>
            </div>
        );
    }
}

export const DropStuffArea = DropTarget( [ItemTypes.MOVE_PAGE, ItemTypes.NEW_PAGE, ItemTypes.NEW_TASK] , dropStuffAreaTarget, collect)(DropArea)

