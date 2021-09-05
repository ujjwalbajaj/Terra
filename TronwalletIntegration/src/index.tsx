import { NetworkInfo, WalletProvider } from '@terra-money/wallet-provider';
import { ConnectSample } from 'components/ConnectSample';
import { QuerySample } from 'components/QuerySample';
import { TxSample } from 'components/TxSample';
import { AppContent } from 'components/AppContent';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import $ from "jquery";

const mainnet = {
  name: 'mainnet',
  chainID: 'columbus-4',
  lcd: 'https://lcd.terra.dev',
};

const testnet = {
  name: 'testnet',
  chainID: 'tequila-0004',
  lcd: 'https://tequila-lcd.terra.dev',
};

const walletConnectChainIds: Record<number, NetworkInfo> = {
  0: testnet,
  1: mainnet,
};

function App() {
  return (
    <div  className="main-layout">
      <AppContent />
      {/* <ConnectSample />
      <QuerySample />
      <TxSample /> */}
    </div>
  );
}

ReactDOM.render(
  <WalletProvider
    defaultNetwork={mainnet}
    walletConnectChainIds={walletConnectChainIds}
  >
    <App />
  </WalletProvider>,
  document.getElementById('root'),
);


  // $(".fancybox").fancybox({
  //     openEffect: "none",
  //     closeEffect: "none"
  // });

  // $(".zoom").hover(function() {
  //     $(this).addClass('transition');
  // }, function() {
  //     $(this).removeClass('transition');
  // });

  // $("#sidebar").mCustomScrollbar({
  //   theme: "minimal"
  // });

$('#dismiss, .overlay').on('click', function() {
    $('#sidebar').removeClass('active');
    $('.overlay').removeClass('active');
});

$('#sidebarCollapse').on('click', function() {
    $('#sidebar').addClass('active');
    $('.overlay').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
});