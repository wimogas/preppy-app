export const logger = ({getState}) => next => action => {
        console.log('----------------------------------')
        console.log('%cprev state', 'color:gray; font-weight: bold', getState())
        console.log('%caction', 'color:turquoise; font-weight: bold', action)
        next(action)
        console.log('%cnext state', 'color:limegreen; font-weight: bold', getState())
}