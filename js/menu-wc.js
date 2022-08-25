'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">AiArt documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Additional documentation</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="link ">
                                        <a href="additional-documentation/commands.html" data-type="entity-link" data-context-id="additional">Commands</a>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-3096fa011afbf16acb3a416f234fc71318fb9def257500b48689d4344bf4802d07e0f8f1f00f18e4f450badcc66e62375eb8f6261da938843e4b950f7026f2ee"' : 'data-target="#xs-injectables-links-module-AppModule-3096fa011afbf16acb3a416f234fc71318fb9def257500b48689d4344bf4802d07e0f8f1f00f18e4f450badcc66e62375eb8f6261da938843e4b950f7026f2ee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-3096fa011afbf16acb3a416f234fc71318fb9def257500b48689d4344bf4802d07e0f8f1f00f18e4f450badcc66e62375eb8f6261da938843e4b950f7026f2ee"' :
                                        'id="xs-injectables-links-module-AppModule-3096fa011afbf16acb3a416f234fc71318fb9def257500b48689d4344bf4802d07e0f8f1f00f18e4f450badcc66e62375eb8f6261da938843e4b950f7026f2ee"' }>
                                        <li class="link">
                                            <a href="injectables/BotGateway.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotGateway</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommandsModule.html" data-type="entity-link" >CommandsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EntityModule.html" data-type="entity-link" >EntityModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GatewayModule.html" data-type="entity-link" >GatewayModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GatewayModule-82c5cc7a60029995d48128245e83b0aee50084b61ef72a268c0466fd1f9ec6e9515fae22506469a7f7f3a793cdcba64ed7aa28de9e2b2f0b481d78942e0473fd"' : 'data-target="#xs-injectables-links-module-GatewayModule-82c5cc7a60029995d48128245e83b0aee50084b61ef72a268c0466fd1f9ec6e9515fae22506469a7f7f3a793cdcba64ed7aa28de9e2b2f0b481d78942e0473fd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GatewayModule-82c5cc7a60029995d48128245e83b0aee50084b61ef72a268c0466fd1f9ec6e9515fae22506469a7f7f3a793cdcba64ed7aa28de9e2b2f0b481d78942e0473fd"' :
                                        'id="xs-injectables-links-module-GatewayModule-82c5cc7a60029995d48128245e83b0aee50084b61ef72a268c0466fd1f9ec6e9515fae22506469a7f7f3a793cdcba64ed7aa28de9e2b2f0b481d78942e0473fd"' }>
                                        <li class="link">
                                            <a href="injectables/BotGateway.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotGateway</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobModule.html" data-type="entity-link" >JobModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-JobModule-a5f750337af610f04ab8f461d6345f494043ff70ac8a6c2b4dcbb8ee88b0d84ce5b681a0eb7910b97496bf495e886157a0a6d6aeb588849c82345d2f21c8ba19"' : 'data-target="#xs-injectables-links-module-JobModule-a5f750337af610f04ab8f461d6345f494043ff70ac8a6c2b4dcbb8ee88b0d84ce5b681a0eb7910b97496bf495e886157a0a6d6aeb588849c82345d2f21c8ba19"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JobModule-a5f750337af610f04ab8f461d6345f494043ff70ac8a6c2b4dcbb8ee88b0d84ce5b681a0eb7910b97496bf495e886157a0a6d6aeb588849c82345d2f21c8ba19"' :
                                        'id="xs-injectables-links-module-JobModule-a5f750337af610f04ab8f461d6345f494043ff70ac8a6c2b4dcbb8ee88b0d84ce5b681a0eb7910b97496bf495e886157a0a6d6aeb588849c82345d2f21c8ba19"' }>
                                        <li class="link">
                                            <a href="injectables/JobService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModelsModule.html" data-type="entity-link" >ModelsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ModelsModule-e858134c9512a32cb4e3f0d2f703d7194f4a1647cd9e55866c8b67829522a5d1ecaf3428b6625bbdba2cc97724d57f9fe53b09c94a6ae38f76b63e1c93fffde3"' : 'data-target="#xs-injectables-links-module-ModelsModule-e858134c9512a32cb4e3f0d2f703d7194f4a1647cd9e55866c8b67829522a5d1ecaf3428b6625bbdba2cc97724d57f9fe53b09c94a6ae38f76b63e1c93fffde3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ModelsModule-e858134c9512a32cb4e3f0d2f703d7194f4a1647cd9e55866c8b67829522a5d1ecaf3428b6625bbdba2cc97724d57f9fe53b09c94a6ae38f76b63e1c93fffde3"' :
                                        'id="xs-injectables-links-module-ModelsModule-e858134c9512a32cb4e3f0d2f703d7194f4a1647cd9e55866c8b67829522a5d1ecaf3428b6625bbdba2cc97724d57f9fe53b09c94a6ae38f76b63e1c93fffde3"' }>
                                        <li class="link">
                                            <a href="injectables/AiArtModel.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AiArtModel</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AiStoryModel.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AiStoryModel</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthModel.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthModel</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CogView2Model.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CogView2Model</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ServicesModule.html" data-type="entity-link" >ServicesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ServicesModule-137b71834dfe728d166e185c58a244741ae6de1441dd1e8f27891373c44f9b6ac3e1c961b5ae1e76f3239e619a564c43b4606f71d23e18b7d11f36ce78415644"' : 'data-target="#xs-injectables-links-module-ServicesModule-137b71834dfe728d166e185c58a244741ae6de1441dd1e8f27891373c44f9b6ac3e1c961b5ae1e76f3239e619a564c43b4606f71d23e18b7d11f36ce78415644"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ServicesModule-137b71834dfe728d166e185c58a244741ae6de1441dd1e8f27891373c44f9b6ac3e1c961b5ae1e76f3239e619a564c43b4606f71d23e18b7d11f36ce78415644"' :
                                        'id="xs-injectables-links-module-ServicesModule-137b71834dfe728d166e185c58a244741ae6de1441dd1e8f27891373c44f9b6ac3e1c961b5ae1e76f3239e619a564c43b4606f71d23e18b7d11f36ce78415644"' }>
                                        <li class="link">
                                            <a href="injectables/AiStoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AiStoryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AmqpService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AmqpService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CogView2Service.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CogView2Service</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DalleMiniService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DalleMiniService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HelpService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HelpService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WomboDreamService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WomboDreamService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UtilitiesModule.html" data-type="entity-link" >UtilitiesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UtilitiesModule-d63c3f0e86295eb599b25f25d02892b5a2ef0d761a5e1c33146ec025af5cbe231df6de1cb265324e0552aa6409e786eabab07e101a9758153372dda716c7f51b"' : 'data-target="#xs-injectables-links-module-UtilitiesModule-d63c3f0e86295eb599b25f25d02892b5a2ef0d761a5e1c33146ec025af5cbe231df6de1cb265324e0552aa6409e786eabab07e101a9758153372dda716c7f51b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UtilitiesModule-d63c3f0e86295eb599b25f25d02892b5a2ef0d761a5e1c33146ec025af5cbe231df6de1cb265324e0552aa6409e786eabab07e101a9758153372dda716c7f51b"' :
                                        'id="xs-injectables-links-module-UtilitiesModule-d63c3f0e86295eb599b25f25d02892b5a2ef0d761a5e1c33146ec025af5cbe231df6de1cb265324e0552aa6409e786eabab07e101a9758153372dda716c7f51b"' }>
                                        <li class="link">
                                            <a href="injectables/Collage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Collage</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Job.html" data-type="entity-link" >Job</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CogView2CommandDto.html" data-type="entity-link" >CogView2CommandDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CogView2Response.html" data-type="entity-link" >CogView2Response</a>
                            </li>
                            <li class="link">
                                <a href="classes/CouldNotGenerateArtException.html" data-type="entity-link" >CouldNotGenerateArtException</a>
                            </li>
                            <li class="link">
                                <a href="classes/CouldNotGenerateWomboArtException.html" data-type="entity-link" >CouldNotGenerateWomboArtException</a>
                            </li>
                            <li class="link">
                                <a href="classes/createCappedJobsCollection1661353047612.html" data-type="entity-link" >createCappedJobsCollection1661353047612</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateJobInput.html" data-type="entity-link" >CreateJobInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/DalleMiniCommandDto.html" data-type="entity-link" >DalleMiniCommandDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GoogleAuthenticationToolkitError.html" data-type="entity-link" >GoogleAuthenticationToolkitError</a>
                            </li>
                            <li class="link">
                                <a href="classes/JobResolver.html" data-type="entity-link" >JobResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/MessageAttachmentWithDbRecord.html" data-type="entity-link" >MessageAttachmentWithDbRecord</a>
                            </li>
                            <li class="link">
                                <a href="classes/OpenAiCommandDto.html" data-type="entity-link" >OpenAiCommandDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateJobInput.html" data-type="entity-link" >UpdateJobInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WomboDreamDto.html" data-type="entity-link" >WomboDreamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WomboDreamModel.html" data-type="entity-link" >WomboDreamModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/WomboDreamStyle.html" data-type="entity-link" >WomboDreamStyle</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AiArtCommand.html" data-type="entity-link" >AiArtCommand</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AiStoryCommand.html" data-type="entity-link" >AiStoryCommand</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CogView2Command.html" data-type="entity-link" >CogView2Command</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DalleMiniCommand.html" data-type="entity-link" >DalleMiniCommand</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HelpCommand.html" data-type="entity-link" >HelpCommand</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HelpInteractionCollector.html" data-type="entity-link" >HelpInteractionCollector</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OpenAiCommand.html" data-type="entity-link" >OpenAiCommand</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WomboDreamCommand.html" data-type="entity-link" >WomboDreamCommand</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AiStoryChoices.html" data-type="entity-link" >AiStoryChoices</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AiStoryRequest.html" data-type="entity-link" >AiStoryRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AiStoryResponse.html" data-type="entity-link" >AiStoryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GoogleApiAuthResponse.html" data-type="entity-link" >GoogleApiAuthResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICogView2Data.html" data-type="entity-link" >ICogView2Data</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICogView2Request.html" data-type="entity-link" >ICogView2Request</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICogView2Response.html" data-type="entity-link" >ICogView2Response</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICogView2ResponseAcknowledged.html" data-type="entity-link" >ICogView2ResponseAcknowledged</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICommandHelp.html" data-type="entity-link" >ICommandHelp</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICommandParameter.html" data-type="entity-link" >ICommandParameter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWomboDreamStyle.html" data-type="entity-link" >IWomboDreamStyle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WomboDreamInputSpec.html" data-type="entity-link" >WomboDreamInputSpec</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WomboDreamTaskResponse.html" data-type="entity-link" >WomboDreamTaskResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WomboTaskIdResponse.html" data-type="entity-link" >WomboTaskIdResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});