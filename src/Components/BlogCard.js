import React from 'react'
import { Link } from 'react-router-dom';

function BlogCard(props) {

    // var parts = props.date.split('-');
    // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
    // January - 0, February - 1, etc.
    // var mydate = new Date(parts[0], parts[1] - 1, parts[2]);

    return (
        <div className="col-lg-4 col-md-6 mb-2-6 mt-2">
            <article className="card card-style2">
                <div className="card-img">
                    <img
                        className="rounded-top"
                        src={props.coverImage?.url}
                        style={{ height: 350, objectFit: 'cover' }}
                        alt="..."
                    />
                    <div className="date">
                        <span>{props.date}</span>
                    </div>
                </div>
                <div className="card-body">
                    <h3 className="h5">
                        <Link to={'/blog/' + props.slug}>{props.title}</Link>
                    </h3>
                    <p className="display-30">
                        {props.excerpt}
                    </p>
                    <Link to={'/blog/' + props.slug} className="read-more">
                        read more...
                    </Link>
                </div>
            </article>
        </div>
    )
}

export default BlogCard