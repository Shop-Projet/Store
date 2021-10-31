import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import InputRange from 'react-input-range';
import SlideToggle from 'react-slide-toggle';
import 'react-input-range/lib/css/index.css';

import ALink from '../../features/alink';
import { shopData } from '../../../utils/data';
import {age, etat, categories} from "../../../dummyData"

function ShopSidebarOne ( props ) {
    const { toggle = false } = props;
    const router = useRouter();
    const query = useRouter().query;


    function containsAttrInUrl ( type, value ) {
        const currentQueries = query[ type ] ? query[ type ].split( ',' ) : [];
        return currentQueries && currentQueries.includes( value );
    }

    function getUrlForAttrs ( type, value ) {
        let currentQueries = query[ type ] ? query[ type ].split( ',' ) : [];
        currentQueries = containsAttrInUrl( type, value ) ? currentQueries.filter( item => item !== value ) : [ ...currentQueries, value ];

        return {
            pathname: router.pathname,
            query: {
                ...query,
                page: 1,
                [ type ]: currentQueries.join( ',' )
            }
        }
    }

    function onAttrClick ( e, attr, value ) {
        if ( getUrlForAttrs( attr, value ) ) {
            let queryObject = getUrlForAttrs( attr, value ).query;
            let url = router.pathname.replace( '[type]', query.type ) + '?';
            for ( let key in queryObject ) {
                if ( key !== "type" ) {
                    url += key + '=' + queryObject[ key ] + '&';
                }
            }
            router.push( url );
        }
    }

    return (
        <>
            <aside className={ `${toggle ? 'sidebar-filter' : 'sidebar'} sidebar-shop` }>
                <div className={ toggle ? 'sidebar-filter-wrapper' : '' }>
                    <div className="widget widget-clean">
                        <label>Filtres:</label>
                        <ALink href={ { pathname: router.pathname, query: {type: query.type} } } className="sidebar-filter-clear" scroll={ false }>Clean All</ALink>
                    </div>

                    <SlideToggle collapsed={ false }>
                        { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                            <div className="widget widget-collapsible">
                                <h3 className="widget-title mb-2">
                                    <a href="#category" className={ `${toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''}` } onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }>Category</a>
                                </h3>
                                <div ref={ setCollapsibleElement }>
                                    <div className="widget-body pt-0">
                                        <div className="filter-items filter-items-count">
                                            {
                                                categories.map( ( item, index ) =>
                                                    <div className="filter-item" key={ `cat_${index}` }>
                                                        <ALink className={ `${query.categorie == item.categorie ? 'active' : ''}` } href={ {pathname: router.pathname, query: { type: query.type, categorie: item.categorie } } } scroll={ false }>{ item.categorie }</ALink>
                                                        <span className="item-count">{ item.count }</span>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) }
                    </SlideToggle>

                    <SlideToggle collapsed={ false }>
                        {
                            ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <div className="widget widget-collapsible">
                                    <h3 className="widget-title mb-2"><a href="#Size" className={ `${toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''}` } onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }>Age</a></h3>
                                    <div ref={ setCollapsibleElement }>
                                        <div className="widget-body pt-0">
                                            <div className="filter-items">
                                                {
                                                    age.map( ( item, index ) => (
                                                        <div className="filter-item" key={ index }>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox"
                                                                    className="custom-control-input"
                                                                    id={ `age-${index + 1}` }
                                                                    onChange={ e => onAttrClick( e, 'age', item.age ) }
                                                                    checked={ containsAttrInUrl( 'age', item.age ) ? true : false }
                                                                />
                                                                <label className="custom-control-label" htmlFor={ `age-${index + 1}` }>{ item.age }</label>
                                                            </div>
                                                        </div>
                                                    ) )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </SlideToggle>
                    <SlideToggle collapsed={ false }>
                        {
                            ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <div className="widget widget-collapsible">
                                    <h3 className="widget-title mb-2"><a href="#Size" className={ `${toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''}` } onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }>Etat</a></h3>
                                    <div ref={ setCollapsibleElement }>
                                        <div className="widget-body pt-0">
                                            <div className="filter-items">
                                                {
                                                    etat.map( ( item, index ) => (
                                                        <div className="filter-item" key={ index }>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox"
                                                                    className="custom-control-input"
                                                                    id={ `etat-${index + 1}` }
                                                                    onChange={ e => onAttrClick( e, 'etat', item.etat ) }
                                                                    checked={ containsAttrInUrl( 'etat', item.etat ) ? true : false }
                                                                />
                                                                <label className="custom-control-label" htmlFor={ `etat-${index + 1}` }>{ item.etat }</label>
                                                            </div>
                                                        </div>
                                                    ) )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </SlideToggle>
                </div>
            </aside>
        </>
    );
}

export default React.memo( ShopSidebarOne );