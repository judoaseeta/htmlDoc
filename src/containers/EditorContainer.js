// react
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditorPanel from '../components/EditorPanel';
import CodeEditor from '../components/CodeEditor';
import CodeRenderer from '../components/CodeRenderer';
// route
import { withRouter } from 'react-router-dom';
// state 
import { connect } from 'react-redux';
import { SetContent, SetTitle } from '../state/actions/doc'; 
import { getDoc, updateDoc } from '../state/actions/api_request';
import docSelector from '../state/selectors/docSelector';
// style
import "../styles/EditorContainer.scss";
const mapStateToProps = (state) => {
    const getDoc =  docSelector();
    return {
        doc: getDoc(state)
    }
}
export class EditorContainer extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    };
    componentDidMount() {
        if(this.props.doc.docId !== this.props.match.params.id) {
            this.props.getDoc(this.props.match.params.id);
        }
    }
    render() {
        const { lastModified, title, content } = this.props.doc;
        return (
            <div
                className="editorContainer__outer"
            >
                <EditorPanel 
                    title={title}
                    lastModified={lastModified}
                    onSave={this.onSave}
                />
                <div
                    className="editorContainer__inner"
                >
                    <CodeEditor 
                        code={content}
                        onChange={this.onChange}
                    />
                    <CodeRenderer
                        code={content}
                    />
                </div>           
            </div>
        )
    }
    onChange (newCode){
        this.props.SetContent(newCode);
    }
    onSave(e) {
        const { doc } = this.props;
        this.props.updateDoc(doc);
    };
}
EditorContainer.propTypes = {
    doc: PropTypes.shape({
        content: PropTypes.string.isRequired,
        createdAt: PropTypes.number,
        title: PropTypes.string.isRequired,
        docId: PropTypes.string.isRequired,
        lastModified: PropTypes.number
    }),
    SetContent: PropTypes.func.isRequired,
    SetTitle: PropTypes.func.isRequired
}
export default withRouter(connect(mapStateToProps,{ getDoc, SetContent, SetTitle, updateDoc })(EditorContainer));