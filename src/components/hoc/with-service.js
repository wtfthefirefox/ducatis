import React from 'react';
import ServiceContext from '../service-context';

const WithService = () => (Wrapped) => {
    return (props) => {
        return (
            <ServiceContext.Consumer>
                {
                    (service) => {
                        return <Wrapped {...props} service={service}/>
                    }
                }
            </ServiceContext.Consumer>
        )
    }
}

export default WithService;