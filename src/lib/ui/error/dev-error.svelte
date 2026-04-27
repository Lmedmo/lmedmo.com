<script lang="ts">
    import { AppState } from '$lib/config';

    let ps = $derived(AppState.page);
</script>


<div class="error">
    <div class="header">
        Uhh... Something isn't working right...
    </div>
    <div class="detail-pane">
        <div class="detail-banner">
            <!-- <div class="msg">Page/View not found</div> -->
            <!-- <div class="code">[code=404]</div> -->
            <div class="msg">Unable to redirect to default page.</div>
            <div class="code">[code=420]</div>
        </div>
        <div class="description">
            <p>Page should not be accessed. Page configured for routing (redirects=true), but was unable to redirect to a specified default sub-page or nested route.</p>
            <!-- <p> -->
                <!-- Page identifier unspecified or cannot be determined ~ Verify that page and routing condition(s) exist and can be reached. -->
            <!-- </p> -->
            <p>
                [value]: 'page.id' = {ps.id}
                [value]: 'page.url' = {ps.url}
                [value]: 'page.redirects' = {ps.redirects}
                [value]: 'page.name' = {ps.name}
                [value]: 'page.icon' = {ps.icons}
                [value]: 'page.childOf' = {ps.parent}
            </p>                    
        </div>
    </div>
</div>


<style>
    .error {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        margin: 50px auto;
        padding: 50px;
        align-self: center;
        flex: 1 0 0;
    }
    .header {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        align-self: stretch;
        padding: 0px 0px 20px 0px;

        font-family: "Avenir Next";
        font-size: 70px;
        font-weight: 700;
        color: rgb(92, 145, 29);
        text-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
        font-style: normal;
        line-height: normal;
        text-align: start;
        letter-spacing: 1px;
    }
    .detail-pane {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        max-height: 300px;
        padding: 8px;
        align-self: stretch;
        flex: 1 0 0;
        border: 1px solid #cacaca;
        background-color: #ffc880;
        border-radius: 20px;
    }
    
    .detail-banner {
        display: flex;
        box-sizing: border-box;
        flex-direction: row;
        padding: 15px 20px 15px 20px;
        background-color: #303030;
        border-radius: 12px 12px 0px 0px;
        justify-content: space-between;
        align-items: center;
    }
    .msg {
        display: flex;
        box-sizing: border-box;
        font-family: "Ubuntu Mono";
        font-size: 20px;
        color: #fff;
        font-weight: 500;
        font-style: normal;
        line-height: normal;
        text-align: start;
        letter-spacing: 1px;
        /* letter-spacing: -1.1px; */
    }
    .code {
        display: flex;
        box-sizing: border-box;
        background-color: hsl(48, 48%, 24%);
        padding: 7px 10px 8px 10px;
        border-radius: 10px;
        border: 2px solid hsl(50, 100%, 60%);
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.35);
        font-family: "Ubuntu Mono";
        font-size: 20px;
        color: hsl(50, 100%, 60%);
        font-weight: 400;
        font-style: normal;
        line-height: normal;
        text-align: center;
        text-shadow: -3px -3px 10px rgba(0, 0, 0, 0.5);
        letter-spacing: -1.1px;
    }

    .description {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        align-self: stretch;
        flex: 1 0 0;
        padding: 20px;
        border: 1px solid #cacaca;
        border-radius: 0px 0px 12px 12px;
        background-color: #fff;

        font-family: "Ubuntu Mono";
        font-size: 18px;
        font-weight: 400;
        font-style: normal;
        line-height: normal;
        text-align: start;
        white-space-collapse: preserve;
    }
</style>